

import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { Audio } from 'expo-av';

const R1 = () => {
  const [sound, setSound] = useState(null);
  const uri = 'http://192.168.1.13:8000/media/qrcodes/voice_tJga0Xm.mp3';

  const playSound = async () => {
    try {
      const newSound = new Audio.Sound();
      await newSound.loadAsync({ uri: uri });
      await newSound.playAsync();
      setSound(newSound);
    } catch(error) {
      console.error(error);
    }
  };

  const stopSound = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
        setSound(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{alignContent:'center', flex:1,justifyContent:'center'}}>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
};

export default R1;

