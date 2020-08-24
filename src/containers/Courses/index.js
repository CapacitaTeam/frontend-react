/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import Space from 'antd/lib/space';
import Card from 'antd/lib/card';

const GenCards = () => {
  let cardList = [];
  for(var i = 0; i < 5; i ++){
    cardList.push(
      <Card hoverable style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Card>
    );
  }
return <Space >{cardList}</Space>;
};

const Courses = () => {
  
  return <Space className="d-flex">
    <GenCards />
  </Space>
};
  
export default Courses;