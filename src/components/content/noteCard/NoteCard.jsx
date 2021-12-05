import styles from './noteCard.module.scss';
import { CardTitle } from './cardTitle/CardTitle';
import { CardDescription } from './cardDescription/CardDescription';
import { CardTags } from './cardTags/CardTags';

export const NoteCard = ({ title, description, tags, deleteCard, id }) => (
  <div className={styles.container}>
    <CardTitle title={title} deleteCard={deleteCard} id={id} />
    <CardDescription description={description} id={id} />
    <CardTags tags={tags} id={id} />
  </div>
);
