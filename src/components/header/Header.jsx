import { Chip } from './chip/Chip';
import styles from './header.module.scss';

export const Header = ({ testData }) => {
  const tagsArr = [];

  testData.forEach((note) => {
    note.tags.forEach((tag) => {
      tagsArr.push(tag);
    });
  });

  return (
    <div className={styles.container}>
      {tagsArr.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </div>
  );
};
