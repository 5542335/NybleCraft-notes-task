import { shallow } from 'enzyme';

import { InputForEditing } from 'shared/inputForEditing/InputForEditing';
import { useNotes } from 'hooks/useNotes';

import { AddTag } from '../AddTag';
import styles from '../addTags.module.scss';

jest.mock('hooks/useNotes');

describe('Component: AddTags', () => {
  beforeEach(() => {
    useNotes.mockImplementation(() => ({
      notes: [],
      updateNoteById: jest.fn(),
    }));
  });

  it('should render add button by default', () => {
    const component = shallow(<AddTag />);

    expect(component.find('button')).toHaveLength(1);
  });

  it('should render input after click', () => {
    const component = shallow(<AddTag />);

    component.find(`.${styles.addTagBtn}`).simulate('click');

    expect(component.find(InputForEditing)).toHaveLength(1);
    expect(component.find('button')).toHaveLength(0);
  });

  describe('Test adding tag', () => {
    it('should add tag with filled #', async () => {
      const updateNoteByIdMock = jest.fn();

      useNotes.mockImplementation(() => ({
        notes: [
          {
            id: 'testId',
            tags: [],
          },
        ],
        updateNoteById: updateNoteByIdMock,
      }));

      const component = shallow(<AddTag id="testId" />);

      component.find(`.${styles.addTagBtn}`).simulate('click');

      component
        .find(InputForEditing)
        .props()
        .onChange({ target: { value: '#qwerty' } });

      component.find(InputForEditing).props().confirmClick();

      expect(updateNoteByIdMock).toHaveBeenCalledTimes(1);
      expect(updateNoteByIdMock).toHaveBeenCalledWith('testId', { tags: ['#qwerty'] });
    });

    it('should add tag without filled #', () => {
      const updateNoteByIdMock = jest.fn();

      useNotes.mockImplementation(() => ({
        notes: [
          {
            id: 'testId',
            tags: [],
          },
        ],
        updateNoteById: updateNoteByIdMock,
      }));

      const component = shallow(<AddTag id="testId" />);

      component.find(`.${styles.addTagBtn}`).simulate('click');

      component
        .find(InputForEditing)
        .props()
        .onChange({ target: { value: 'qwerty' } });

      component.find(InputForEditing).props().confirmClick();

      expect(updateNoteByIdMock).toHaveBeenCalledTimes(1);
      expect(updateNoteByIdMock).toHaveBeenCalledWith('testId', { tags: ['#qwerty'] });
    });

    it('should close input after adding', () => {
      const component = shallow(<AddTag />);

      component.find(`.${styles.addTagBtn}`).simulate('click');

      component.find(InputForEditing).props().confirmClick();

      expect(component.find(InputForEditing)).toHaveLength(0);
    });
  });

  it('should close input after click close button', () => {
    const component = shallow(<AddTag />);

    component.find(`.${styles.addTagBtn}`).simulate('click');

    expect(component.find(InputForEditing)).toHaveLength(1);
    expect(component.find('button')).toHaveLength(0);

    component.find(InputForEditing).props().cancelClick();

    expect(component.find(InputForEditing)).toHaveLength(0);
    expect(component.find('button')).toHaveLength(1);
  });
});
