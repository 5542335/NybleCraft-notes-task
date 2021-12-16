import { AddTag } from './addTags/AddTag';
import styles from './cardTags.module.scss';
import { Tags } from './tags/Tags';

export const CardTags = ({ tags, id }) => (
  <div className={styles.tags}>
    <AddTag id={id} />
    <Tags tags={tags} id={id} />
  </div>
);
