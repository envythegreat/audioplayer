import React, {useEffect, useRef, FC} from 'react';
import {Animated, Dimensions, Modal, PanResponder, StyleSheet, View} from 'react-native';

interface SBProps{
  children?: JSX.Element;
  visible: boolean;
  onDismiss: any
}

const BorromSheetModal:FC<SBProps> = ({onDismiss,children,visible}: SBProps) => {
  const screenHeight = Dimensions.get('screen').height
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const restPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1]
  })

  useEffect(() => {
    restPositionAnim.start();
  }, [restPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return restPositionAnim.start();
      },
    }),
  ).current;

  const handleDismiss = () => closeAnim.start(onDismiss)
  return(
    <Modal
      animated
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={onDismiss}
      // style={{position:'absolute', backgroundColor: 'red'}}
      >
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.sliderIndicatorRow}>
            <View style={styles.sliderIndicator} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: 'white',
    paddingVertical: 10
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicator: {
    backgroundColor: 'red',
    height: 4,
    width: 45,
  },
});

export default BorromSheetModal