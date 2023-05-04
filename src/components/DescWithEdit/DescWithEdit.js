import React, { useState } from 'react';
import SideBarItemWrapp from '../SideBarItemWrapp/SideBarItemWrapp';
import styles from './descWithEdit.module.scss';

const description = {
  value: 'Metacomet',
  text: 'The comet, at first glance, solves the sextant in many ways, while the density of the Universe is 3 * 10 ...',
};

const DescWithEdit = () => {
  const [desc, setDesc] = useState(description);
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(desc.value);
  const [text, setText] = useState(desc.text);

  const onEdit = () => {
    setEditMode(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    setDesc({ value, text });
    setEditMode(false);
  };

  const onCancel = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <SideBarItemWrapp>
      <h5>Title and description</h5>
      {!editMode && (
        <>
          <p className={styles.value}>{desc.value}</p>
          <p className={styles.description}>{desc.text}</p>
          <button className={styles.btn} onClick={() => onEdit()}>
            Edit
          </button>
        </>
      )}
      {editMode && (
        <form onSubmit={(e) => onSave(e)} autoComplete='off'>
          <div className={styles.formRow}>
            <label htmlFor='value'>Title*</label>
            <input
              name='value'
              type='text'
              onChange={onValueChange}
              value={value}
            />
          </div>
          <div className={styles.formRow}>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              onChange={onTextChange}
              value={text}
              maxLength='150'
            ></textarea>
          </div>
          <div className='buttons'>
            <button className={styles.btn}>Save Changes</button>
            <button className={styles.btn} onClick={(e) => onCancel(e)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </SideBarItemWrapp>
  );
};

export default DescWithEdit;
