import { useEffect, useRef, useState } from "react";
import { PickerView, View, PickerViewColumn } from "@tarojs/components";
import './picker-view.scss';

interface RangeInterface {
  years: (string | number)[],
  months: (string | number)[],
  days: (string | number)[],
}

interface CrtDateInterface {
  year: string | number,
  month: string | number,
  day: string | number,
}

const Picks = () => {
  const date = useRef(new Date()).current;

  const [value, setValue] = useState<number[]>([]);
  const [dateRange, setDateRange] = useState<RangeInterface>({
    years: [],
    months: [],
    days: [],
  });

  const [crtDate, setCrtDate] = useState<CrtDateInterface>({
    year: '',
    month: '',
    day: '',
  });

  useEffect(() => {
    let years: (string | number)[] = [];
    let months: (string | number)[] = [];
    let days: (string | number)[] = [];
    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i);
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    setDateRange({
      years,
      months,
      days,
    });
    setCrtDate({
      year: years[0],
      month: months[0],
      day: days[0],
    })
  }, [date]);

  const _onChange = e => {
    const val = e.detail.value;
    setValue(val);
    setCrtDate({
      year: dateRange.years[val[0]],
      month: dateRange.months[val[1]],
      day: dateRange.days[val[2]],
    })
  }

  return (
    <View>
      <View className="value">选中的值: {crtDate.year}年{crtDate.month}月{crtDate.day}日</View>
      <PickerView value={value} onChange={_onChange}>
        <PickerViewColumn>
          {dateRange.years.map(item => {
            return (
              <View key={item}>{item}年</View>
            );
          })}
        </PickerViewColumn>
        <PickerViewColumn>
          {dateRange.months.map(item => {
            return (
              <View key={item}>{item}月</View>
            );
          })}
        </PickerViewColumn>
        <PickerViewColumn>
          {dateRange.days.map(item => {
            return (
              <View key={item}>{item}日</View>
            );
          })}
        </PickerViewColumn>
      </PickerView>
    </View>
  );
}

export default Picks;
