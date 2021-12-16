import { shallow } from 'enzyme';

import { InputForEditing } from 'shared/inputForEditing/InputForEditing';

import { Tags } from '../Tags';
import styles from '../tags.module.scss';

describe('Component: Tags', () => {
  it('should render input after click', () => {
    const component = shallow(<Tags />);

    component.find(`.${styles.tagTextBtn}`).simulate('click');

    expect(component.find(InputForEditing)).toHaveLength(1);
    expect(component.find('button')).toHaveLength(0);
  });
});
