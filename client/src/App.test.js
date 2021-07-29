/* eslint-disable jest/valid-expect */

import React from 'react';
// eslint-disable-next-line no-unused-vars
import App from './routes/App';
// eslint-disable-next-line no-unused-vars
import NewRecipe from './components/NewRecipe';
// eslint-disable-next-line no-unused-vars
import Landing from "./components/Landing";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
// eslint-disable-next-line no-unused-vars
import { render, screen } from '@testing-library/react';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line no-unused-vars
import store from './store/index';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { expect } from 'chai';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
// eslint-disable-next-line no-unused-vars
const { Provider, Consumer } = React.createContext("defaultValue");
Enzyme.configure({ adapter: new Adapter() })


chai.use(chaiEnzyme());


describe('<App /> component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App store={store}/>);
    });
  
    it('has five <Route /> with components', () => {
      expect(wrapper.find(Route)).to.have.lengthOf(5);
      expect(wrapper.find(Route).first()).to.have.prop('component');
      expect(wrapper.find(Route).first()).to.not.have.prop('render');
    });
  });

  
describe('<Sidebar/>', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Card/>
      );
    });
    it('Renderiza un <form>', () => {
      expect(wrapper.find('form')).toHaveLength(1)
    })
  });