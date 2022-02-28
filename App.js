/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WheelPicker from 'react-native-wheely';

const App = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const ref = React.useRef();

  //demo user data
  const userYear = 2000;
  const userAge = 100;

  const yearData = [1,2,3,4,5,6];
  const monthData = [];
  const dayData = [];
  const ageData = [1,2,3,4,5,6];

  const viewabilityConfig = {
    minimumViewTime: 3000,
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  console.log(ref.current);

  // for (let i = 0; i < userAge; i++) {
  //   yearData.push(userYear + i);
  //   ageData.push(i + 1);
  // }
  for (let i = 1; i < 13; i++) {
    monthData.push(i);
  }
  for (let i = 1; i < 32; i++) {
    dayData.push(i);
  }

  const checkLeapYear = data => {
    if ((data % 4 === 0 && data % 100 !== 0) || data % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View>
      <View>
        <Text>{yearData[year]}</Text>
        <Text>{monthData[month]}</Text>
        <Text>{dayData[day]}</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <WheelPicker
          selectedIndex={year}
          options={yearData}
          onChange={index => setYear(index)}
          containerStyle={styles.yearPicker}
          selectedIndicatorStyle={styles.item}
          viewabilityConfig={viewabilityConfig}
        />
        <WheelPicker
          selectedIndex={month}
          options={monthData}
          onChange={index => setMonth(index)}
          containerStyle={styles.picker}
          selectedIndicatorStyle={styles.item}
          viewabilityConfig={viewabilityConfig}
        />
        <WheelPicker
          ref={ref}
          selectedIndex={day}
          options={dayData}
          onChange={index => setDay(index)}
          containerStyle={styles.picker}
          selectedIndicatorStyle={styles.item}
          viewabilityConfig={viewabilityConfig}
        />
        <WheelPicker
          ref={ref}
          selectedIndex={year}
          options={ageData}
          onChange={index => setYear(index)}
          containerStyle={styles.picker}
          selectedIndicatorStyle={styles.item}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <TouchableOpacity onPress={() => console.log(year, month, day)}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  yearPicker: {
    width: '20%',
  },
  picker: {
    width: '15%',
    marginLeft: '2%',
    marginRight: '2%',
  },

  item: {
    borderRadius: 0,
    backgroundColor: 'white',
    borderTopColor: 'gray',
    borderBottomColor: 'gray',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default App;
