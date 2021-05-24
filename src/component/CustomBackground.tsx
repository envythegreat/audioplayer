import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';
import Animated from 'react-native-reanimated';
import { interpolateColor } from 'react-native-redash';
import { BlurView } from 'expo-blur';

interface CustomBackgroundProps extends BottomSheetBackgroundProps {}

const CustomBackground: React.FC<CustomBackgroundProps> = ({
  style,
  animatedIndex,
}) => {
  //#region styles
  const containerStyle = useMemo(
    () => [
      styles.container,
      style,
      {
        backgroundColor: interpolateColor(animatedIndex, {
          inputRange: [1, 1],
          outputRange: ['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.2)'],
        }),
      },
    ],
    [style, animatedIndex]
  );
  //#endregion

  // render
  return (
    /* @ts-ignore */
    <Animated.View pointerEvents="none" style={containerStyle} >
    </Animated.View>
  );
};

export default CustomBackground;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(79, 79, 79, 0.2)',
    borderRadius: 20 ,
  },
});