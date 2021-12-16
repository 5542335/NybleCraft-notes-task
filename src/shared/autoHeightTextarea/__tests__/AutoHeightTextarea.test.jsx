import { mount, shallow } from 'enzyme';

import { AutoHeightTextarea } from '../AutoHeightTextarea';

describe('Component: AutoHeightTextarea', () => {
  it('should render textarea', () => {
    const component = shallow(<AutoHeightTextarea />);

    expect(component.find('textarea')).toHaveLength(1);
    expect(component.find('textarea').props().defaultValue).toStrictEqual('');
  });

  it('should call onChange', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<AutoHeightTextarea onChange={onChangeMock} />);

    const event = { target: { value: 'test' } };

    component.simulate('change', event);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(event);
  });

  it('should change height', () => {
    const component = mount(<AutoHeightTextarea />);

    expect(getComputedStyle(component.find('textarea').getDOMNode()).height).toStrictEqual('0px');
  });
});
