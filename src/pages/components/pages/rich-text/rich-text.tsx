import { RichText, View } from "@tarojs/components";
import Header from "../../head/head";

import "./rich-text.scss";

const Index = () => {
  const nodes = [
    {
      name: "div",
      attrs: {
        class: "div_class",
        style: `
            line-height: 60px;
            color: white;
            font-size: 60px;
          `
      },
      children: [
        {
          type: "text",
          text: "Hello World!"
        }
      ]
    }
  ];

  return (
    <View className='components-page'>
      <View className='components-page__header'>
        <Header title='RichText'></Header>
      </View>
      <RichText className='rich-text' nodes={nodes} />
    </View>
  );
}

export default Index;