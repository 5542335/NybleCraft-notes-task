import { shallow } from 'enzyme';

import { EditingTag } from 'components/content/editingTag/EditingTag';
import { useNotes } from 'hooks/useNotes';

import { Tags } from '../Tags';
import styles from '../tags.module.scss';

jest.mock('hooks/useNotes');

describe('Component: Tags', () => {
  beforeEach(() => {
    useNotes.mockImplementation(() => ({
      notes: [
        {
          id: 'testId',
          tags: ['one', 'two'],
        },
      ],
      updateNoteById: jest.fn(),
    }));
  });

  it('should render input after click', () => {
    const tags = ['one', 'two'];
    const component = shallow(<Tags tags={tags} id="testId" />);

    console.log(useNotes.getMockImplementation(), 'notes');

    component.find(`.${styles.tagTextBtn}`).at(0).simulate('click');

    expect(component.find(EditingTag)).toHaveLength(1);
    expect(component.find('button.tagTextBtn')).toHaveLength(1);
  });

  // it('should delete tag', async () => {
  //   const updateNoteByIdMock = jest.fn();

  //   // console.log(jest.fn());

  //   const component = shallow(<Tags tags={['one', 'two']} />);

  //   component.find(`.${styles.tagDeleteBtn}`).at(0).simulate('click');

  //   // console.log(useNotes.notes.tags);

  //   expect(updateNoteByIdMock).toHaveBeenCalledTimes(0);
  // });
});
