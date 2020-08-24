import React from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
// routers and states
import states from '../states';
import config from '../states/config';

const plugins = [pushStateLocationPlugin];
const propsUIRouter = { plugins, config, states };

const App = () => (
  <div>
      <UIRouter {...propsUIRouter} >
          <UIView render={(RoutedComponent,props) => (
            <section id="app">
              <RoutedComponent {...props} key={props.transition}/>
            </section>
          )} />
      </UIRouter>
  </div>
);

export default App;
