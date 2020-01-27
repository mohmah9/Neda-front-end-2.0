import React , {useState}  from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { Divider } from '@material-ui/core';

export default class footer extends React.Component {
 
  render(){
    return(
      <div>
        <Divider/>
        <Footer
          maxColumnsPerRow={3}
          theme = {'light'}
          columns={[
            {
              title: '相关资源',
            items: [
              {
                title: ' ورود کاربران',
                url: 'http://localhost:3000/login',
                // openExternal: true,
              },
              {
                title: 'ثبت نام بیماران',
                url: 'http://localhost:3000/Signup',
                openExternal: true,
              },
              {
                title: 'ثبت نام پزشکان',
                url: 'http://localhost:3000/Signup',
                description: 'signup',
              },
            ],
          },
              // // icon: (
              // //   <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
              // // ),
              // title: ' ندا سامانه نوبت دهی اینترنتی پزشکان',
              // // url: 'https://yuque.com',
              // description: '"ندا سامانه نوبت دهی اینترنتی پزشکان"',
              // openExternal: true,
            
          ]}
          bottom="Made with ❤️ by NEDA"
        />
        {/* // mountNode, */}
      </div>
    );
  }
  
}