import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import s from './GptText.module.scss';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
interface FormProps {
  onSubmit: React.FormEventHandler;
}

// eslint-disable-next-line no-empty-pattern
export default function GptText() {
  const [text, setText] = useState([]);
  const [loading, setLOading] = useState(false);
  const [refresher, setRefresher] = useState('');

  const ferText = useRef<HTMLTextAreaElement>(null);
  const editedText = useRef<HTMLTextAreaElement>(null);
  const techName = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  const nameCommand = techName.current?.value;

  const comment = `Заполни массив командами ${nameCommand} на основе приведенного примера. Добавь максимально много команд. Описание команд должно быть на русском языке. Не ставь знак ; в конце объекта.  Верни ответ в формате JSON.`;
  const tmux = [
    {
      command: [`${nameCommand} command1`, 'command description']
    },
    {
      command: [`${nameCommand} command2`, 'command description']
    },
    {
      command: [`${nameCommand} command3`, 'command description']
    }
  ];

  const sendText = async (e: { preventDefault: () => void }) => {
    const headers = {
      'content-type': 'application/json'
    };

    const data = {
      title: `${JSON.stringify(tmux)}; ${comment}`
    };

    e.preventDefault();
    try {
      setLOading(true);
      await axios
        .post('http://localhost:3000/api/gen', data, { headers })
        .then((response) => {
          setText(response.data);
          // console.log('AAAAA', response.data);
          setLOading(false);
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  type elType = {
    command: any;
  };

  const commands = text.map((el: elType) => {
    // eslint-disable-next-line react/jsx-key
    return (
      // eslint-disable-next-line react/jsx-key
      <div className={s.commandsList} key={uuidv4()}>
        <div className={[s.commandsListEl, s.left].join(', ')}>{el.command[0]}</div>
        <div className={[s.commandsListEl, s.right].join(', ')}>{el.command[1]}</div>
      </div>
    );
  });

  return (
    <div className={s.container}>
      <form onSubmit={sendText}>
        <div className={s.header}>
          <div>
            <input
              onInput={(e) => setRefresher(e.currentTarget.value)}
              ref={techName}
              className={s.techName}
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <button className={s.button} type="submit">
              {'Generate'}
            </button>
          </div>
          {/* <textarea
            ref={ferText}
            value={JSON.stringify(tmux) + '\n\n' + comment}
            name=""
            id=""
            cols={30}
            rows={10}></textarea> */}
        </div>
        {loading ? (
          <div className={s.animation}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            {/* <textarea ref={editedText} defaultValue={'text'} cols={30} rows={20} /> */}
            <div>{commands}</div>
          </div>
        )}
      </form>
      <div style={{ display: 'none' }}>{refresher}</div>
    </div>
  );
}
