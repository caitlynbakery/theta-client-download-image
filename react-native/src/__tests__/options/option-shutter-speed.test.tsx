import { ShutterSpeedEnum } from '../../theta-repository/options';

describe('ShutterSpeedEnum', () => {
  const data: [ShutterSpeedEnum, string][] = [
    [ShutterSpeedEnum.SHUTTER_SPEED_AUTO, 'SHUTTER_SPEED_AUTO'],
    [ShutterSpeedEnum.SHUTTER_SPEED_60, 'SHUTTER_SPEED_60'],
    [ShutterSpeedEnum.SHUTTER_SPEED_50, 'SHUTTER_SPEED_50'],
    [ShutterSpeedEnum.SHUTTER_SPEED_40, 'SHUTTER_SPEED_40'],
    [ShutterSpeedEnum.SHUTTER_SPEED_30, 'SHUTTER_SPEED_30'],
    [ShutterSpeedEnum.SHUTTER_SPEED_25, 'SHUTTER_SPEED_25'],
    [ShutterSpeedEnum.SHUTTER_SPEED_20, 'SHUTTER_SPEED_20'],
    [ShutterSpeedEnum.SHUTTER_SPEED_15, 'SHUTTER_SPEED_15'],
    [ShutterSpeedEnum.SHUTTER_SPEED_13, 'SHUTTER_SPEED_13'],
    [ShutterSpeedEnum.SHUTTER_SPEED_10, 'SHUTTER_SPEED_10'],
    [ShutterSpeedEnum.SHUTTER_SPEED_8, 'SHUTTER_SPEED_8'],
    [ShutterSpeedEnum.SHUTTER_SPEED_6, 'SHUTTER_SPEED_6'],
    [ShutterSpeedEnum.SHUTTER_SPEED_5, 'SHUTTER_SPEED_5'],
    [ShutterSpeedEnum.SHUTTER_SPEED_4, 'SHUTTER_SPEED_4'],
    [ShutterSpeedEnum.SHUTTER_SPEED_3_2, 'SHUTTER_SPEED_3_2'],
    [ShutterSpeedEnum.SHUTTER_SPEED_2_5, 'SHUTTER_SPEED_2_5'],
    [ShutterSpeedEnum.SHUTTER_SPEED_2, 'SHUTTER_SPEED_2'],
    [ShutterSpeedEnum.SHUTTER_SPEED_1_6, 'SHUTTER_SPEED_1_6'],
    [ShutterSpeedEnum.SHUTTER_SPEED_1_3, 'SHUTTER_SPEED_1_3'],
    [ShutterSpeedEnum.SHUTTER_SPEED_1, 'SHUTTER_SPEED_1'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_1_3, 'SHUTTER_SPEED_ONE_OVER_1_3'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_1_6, 'SHUTTER_SPEED_ONE_OVER_1_6'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_2, 'SHUTTER_SPEED_ONE_OVER_2'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_2_5, 'SHUTTER_SPEED_ONE_OVER_2_5'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_3, 'SHUTTER_SPEED_ONE_OVER_3'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_4, 'SHUTTER_SPEED_ONE_OVER_4'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_5, 'SHUTTER_SPEED_ONE_OVER_5'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_6, 'SHUTTER_SPEED_ONE_OVER_6'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_8, 'SHUTTER_SPEED_ONE_OVER_8'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_10, 'SHUTTER_SPEED_ONE_OVER_10'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_13, 'SHUTTER_SPEED_ONE_OVER_13'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_15, 'SHUTTER_SPEED_ONE_OVER_15'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_20, 'SHUTTER_SPEED_ONE_OVER_20'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_25, 'SHUTTER_SPEED_ONE_OVER_25'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_30, 'SHUTTER_SPEED_ONE_OVER_30'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_40, 'SHUTTER_SPEED_ONE_OVER_40'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_50, 'SHUTTER_SPEED_ONE_OVER_50'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_60, 'SHUTTER_SPEED_ONE_OVER_60'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_80, 'SHUTTER_SPEED_ONE_OVER_80'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_100, 'SHUTTER_SPEED_ONE_OVER_100'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_125, 'SHUTTER_SPEED_ONE_OVER_125'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_160, 'SHUTTER_SPEED_ONE_OVER_160'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_200, 'SHUTTER_SPEED_ONE_OVER_200'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_250, 'SHUTTER_SPEED_ONE_OVER_250'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_320, 'SHUTTER_SPEED_ONE_OVER_320'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_400, 'SHUTTER_SPEED_ONE_OVER_400'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_500, 'SHUTTER_SPEED_ONE_OVER_500'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_640, 'SHUTTER_SPEED_ONE_OVER_640'],
    [ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_800, 'SHUTTER_SPEED_ONE_OVER_800'],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_1000,
      'SHUTTER_SPEED_ONE_OVER_1000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_1250,
      'SHUTTER_SPEED_ONE_OVER_1250',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_1600,
      'SHUTTER_SPEED_ONE_OVER_1600',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_2000,
      'SHUTTER_SPEED_ONE_OVER_2000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_2500,
      'SHUTTER_SPEED_ONE_OVER_2500',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_3200,
      'SHUTTER_SPEED_ONE_OVER_3200',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_4000,
      'SHUTTER_SPEED_ONE_OVER_4000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_5000,
      'SHUTTER_SPEED_ONE_OVER_5000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_6400,
      'SHUTTER_SPEED_ONE_OVER_6400',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_8000,
      'SHUTTER_SPEED_ONE_OVER_8000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_10000,
      'SHUTTER_SPEED_ONE_OVER_10000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_12500,
      'SHUTTER_SPEED_ONE_OVER_12500',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_12800,
      'SHUTTER_SPEED_ONE_OVER_12800',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_16000,
      'SHUTTER_SPEED_ONE_OVER_16000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_20000,
      'SHUTTER_SPEED_ONE_OVER_20000',
    ],
    [
      ShutterSpeedEnum.SHUTTER_SPEED_ONE_OVER_25000,
      'SHUTTER_SPEED_ONE_OVER_25000',
    ],
  ];

  test('length', () => {
    expect(data.length).toBe(Object.keys(ShutterSpeedEnum).length);
  });

  test('data', () => {
    data.forEach((item) => {
      expect(item[0] ? item[0].toString() : '').toBe(item[1]);
    });
  });
});
