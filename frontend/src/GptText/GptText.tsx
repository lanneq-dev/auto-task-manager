import axios from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import s from './GptText.module.scss';
interface FormProps {
  onSubmit: React.FormEventHandler;
}

// eslint-disable-next-line no-empty-pattern
export default function GptText() {
  const [text, setText] = useState('...');

  const ferText = useRef<HTMLInputElement>(null);
  const editedText = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  useEffect(() => {
    console.log(editedText.current?.value);
  });

  const sendText = async (e: { preventDefault: () => void }) => {
    const headers = {
      'content-type': 'application/json'
    };

    const data = {
      title: `${ferText.current?.value}`
    };

    e.preventDefault();
    try {
      await axios
        .post('http://localhost:3000/api/gen', data, { headers })
        .then((response) => {
          setText(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={sendText}>
        <div>
          <input ref={ferText} type="text" name="" id="" />
        </div>
        <button type="submit">Generate</button>
        <div>
          <textarea ref={editedText} value={text} cols={30} rows={20} />
        </div>
      </form>
    </div>
  );
}
