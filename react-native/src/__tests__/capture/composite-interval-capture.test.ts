import { NativeModules } from 'react-native';
import {
  getCompositeIntervalCaptureBuilder,
  initialize,
} from '../../theta-repository';
import {
  BaseNotify,
  NotifyController,
} from '../../theta-repository/notify-controller';
import { NativeEventEmitter_addListener } from '../../__mocks__/react-native';

describe('interval composite shooting', () => {
  const thetaClient = NativeModules.ThetaClientReactNative;

  beforeEach(() => {
    jest.clearAllMocks();
    NotifyController.instance.release();
  });

  afterEach(() => {
    thetaClient.initialize = jest.fn();
    thetaClient.buildCompositeIntervalCapture = jest.fn();
    thetaClient.startCompositeIntervalCapture = jest.fn();
    thetaClient.cancelCompositeIntervalCapture = jest.fn();
    NotifyController.instance.release();
  });

  test('getCompositeIntervalCaptureBuilder', async () => {
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn(() => {
        return {
          remove: jest.fn(),
        };
      })
    );
    const builder = getCompositeIntervalCaptureBuilder(600);
    expect(builder.interval).toBeUndefined();

    builder.setCheckStatusCommandInterval(1);
    builder.setCompositeShootingOutputInterval(60);

    expect(builder.interval).toBe(1);
    expect(builder.options.compositeShootingOutputInterval).toBe(60);

    let isCallBuild = false;
    jest.mocked(thetaClient.buildCompositeIntervalCapture).mockImplementation(
      jest.fn(async (options) => {
        expect(options._capture_interval).toBe(1);
        expect(options.compositeShootingOutputInterval).toBe(60);
        isCallBuild = true;
      })
    );

    const capture = await builder.build();
    expect(capture).toBeDefined();
    expect(capture.notify).toBeDefined();
    expect(isCallBuild).toBeTruthy();

    expect(thetaClient.getCompositeIntervalCaptureBuilder).toHaveBeenCalledWith(
      600
    );
  });

  test('build no interval', async () => {
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn(() => {
        return {
          remove: jest.fn(),
        };
      })
    );
    const builder = getCompositeIntervalCaptureBuilder(600);
    expect(builder.interval).toBeUndefined();

    jest.mocked(thetaClient.buildCompositeIntervalCapture).mockImplementation(
      jest.fn(async (options) => {
        expect(options._capture_interval).toBe(-1);
      })
    );

    const capture = await builder.build();
    expect(capture).toBeDefined();
  });

  test('startCapture', async () => {
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn(() => {
        return {
          remove: jest.fn(),
        };
      })
    );
    await initialize();
    const builder = getCompositeIntervalCaptureBuilder(600);
    jest
      .mocked(thetaClient.buildCompositeIntervalCapture)
      .mockImplementation(jest.fn(async () => {}));
    const testUrls = ['http://192.168.1.1/files/100RICOH/R100.JPG'];
    jest.mocked(thetaClient.startCompositeIntervalCapture).mockImplementation(
      jest.fn(async () => {
        return testUrls;
      })
    );

    const capture = await builder.build();
    const fileUrls = await capture.startCapture();
    expect(fileUrls).toBe(testUrls);
    expect(NotifyController.instance.notifyList.size).toBe(0);
  });

  test('cancelCapture', (done) => {
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn(() => {
        return {
          remove: jest.fn(),
        };
      })
    );
    const builder = getCompositeIntervalCaptureBuilder(600);
    jest
      .mocked(thetaClient.buildCompositeIntervalCapture)
      .mockImplementation(jest.fn(async () => {}));
    jest.mocked(thetaClient.startCompositeIntervalCapture).mockImplementation(
      jest.fn(async () => {
        return null;
      })
    );

    builder.build().then((capture) => {
      capture.startCapture().then((value) => {
        expect(value).toBeUndefined();
        done();
      });
      capture.cancelCapture();
      expect(thetaClient.cancelCompositeIntervalCapture).toHaveBeenCalled();
    });
  });

  test('exception', (done) => {
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn(() => {
        return {
          remove: jest.fn(),
        };
      })
    );
    const builder = getCompositeIntervalCaptureBuilder(600);
    jest
      .mocked(thetaClient.buildCompositeIntervalCapture)
      .mockImplementation(jest.fn(async () => {}));
    jest.mocked(thetaClient.startCompositeIntervalCapture).mockImplementation(
      jest.fn(async () => {
        throw 'error';
      })
    );

    builder.build().then((capture) => {
      capture
        .startCapture()
        .then(() => {
          expect(true).toBeFalsy();
        })
        .catch((error) => {
          expect(error).toBe('error');
          done();
        });
    });
  });

  test('progress events', async () => {
    let notifyCallback: (notify: BaseNotify) => void = () => {
      expect(true).toBeFalsy();
    };
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn((_, callback) => {
        notifyCallback = callback;
        return {
          remove: jest.fn(),
        };
      })
    );

    await initialize();
    const builder = getCompositeIntervalCaptureBuilder(600);
    jest
      .mocked(thetaClient.buildCompositeIntervalCapture)
      .mockImplementation(jest.fn(async () => {}));
    const testUrl = 'http://192.168.1.1/files/100RICOH/R100.JPG';

    const sendProgress = (progress: number) => {
      notifyCallback({
        name: 'COMPOSITE-INTERVAL-PROGRESS',
        params: {
          completion: progress,
        },
      });
    };

    jest.mocked(thetaClient.startCompositeIntervalCapture).mockImplementation(
      jest.fn(async () => {
        sendProgress(0.5);
        return testUrl;
      })
    );

    const capture = await builder.build();
    let isOnProgress = false;
    const fileUrl = await capture.startCapture((completion) => {
      expect(completion).toBe(0.5);
      isOnProgress = true;
    });
    expect(fileUrl).toBe(testUrl);

    let done: (value: unknown) => void;
    const promise = new Promise((resolve) => {
      done = resolve;
    });

    setTimeout(() => {
      expect(NotifyController.instance.notifyList.size).toBe(0);
      expect(isOnProgress).toBeTruthy();
      done(0);
    }, 1);

    return promise;
  });

  test('stop error events', async () => {
    let notifyCallback: (notify: BaseNotify) => void = () => {
      expect(true).toBeFalsy();
    };
    jest.mocked(NativeEventEmitter_addListener).mockImplementation(
      jest.fn((_, callback) => {
        notifyCallback = callback;
        return {
          remove: jest.fn(),
        };
      })
    );

    await initialize();
    const builder = getCompositeIntervalCaptureBuilder(600);
    jest
      .mocked(thetaClient.buildCompositeIntervalCapture)
      .mockImplementation(jest.fn(async () => {}));
    const testUrl = 'http://192.168.1.1/files/100RICOH/R100.JPG';

    const sendStopError = (message: string) => {
      notifyCallback({
        name: 'COMPOSITE-INTERVAL-STOP-ERROR',
        params: {
          message,
        },
      });
    };

    jest.mocked(thetaClient.startCompositeIntervalCapture).mockImplementation(
      jest.fn(async () => {
        sendStopError('stop error');
        return testUrl;
      })
    );

    const capture = await builder.build();
    let isOnStopError = false;
    const fileUrl = await capture.startCapture(
      () => {},
      (error) => {
        expect(error.message).toBe('stop error');
        isOnStopError = true;
      }
    );
    expect(fileUrl).toBe(testUrl);

    let done: (value: unknown) => void;
    const promise = new Promise((resolve) => {
      done = resolve;
    });

    setTimeout(() => {
      expect(NotifyController.instance.notifyList.size).toBe(0);
      expect(isOnStopError).toBeTruthy();
      done(0);
    }, 1);

    return promise;
  });
});
