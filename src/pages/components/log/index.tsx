import { View, Text } from '@tarojs/components'
import "./index.scss";

export interface LogType {
  time: string,
  text: string | undefined,
}

interface LogProps {
  logs: LogType[]
};

const Log = (props: LogProps) => {
  const { logs } = props;

  return (
    <View className="log-container">
    { logs.map((log, index) => {
        return (
          <View key={index} className="log-row">
            <Text className="log-time">{log.time}</Text>
            <Text className="log-text">{log.text}</Text>
          </View>
        );
      })
    }
    </View>
  )
}
export default Log;