import { mount, shallow } from 'enzyme';
// import { act } from 'react-dom/test-utils';

import { useNotes } from 'hooks/useNotes';
import { InputForEditing } from 'shared/inputForEditing/InputForEditing';

import { EditingTag } from './EditingTag';

jest.mock('hooks/useNotes');

describe('Component: EditingTag', () => {
  beforeEach(() => {
    useNotes.mockImplementation(() => ({
      notes: [],
      tags: [],
      updateNoteById: jest.fn(),
    }));
  });

  it('should renders input and buttons by default', () => {
    const component = mount(<EditingTag />);

    expect(component.find(EditingTag)).toHaveLength(1);
    expect(component.find('button')).toHaveLength(2);
  });

  it('should write text to state', () => {
    const onChangeMock = jest.fn();
    const component = shallow(<EditingTag />);

    component
      .find(InputForEditing)
      .props()
      .onChange({ target: { value: 'hello' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith({ target: { value: 'hello' } });
  });
});
