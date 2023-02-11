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

  const ferText = useRef<HTMLTextAreaElement>(null);
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
        <div>
          <textarea
            ref={ferText}
            value={JSON.stringify(tmux) + '\n\n' + comment}
            name=""
            id=""
            cols={30}
            rows={10}></textarea>
        </div>
        <button type="submit">Generate</button>
        {loading ? (
          <div className={s.animation}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            {/* <textarea ref={editedText} defaultValue={'text'} cols={30} rows={20} /> */}
            <div>{commands ? commands : 'nooooo(('}</div>
          </div>
        )}
      </form>
    </div>
  );
}

export const comment = 'generate array with common tmux commands. Return as JSON.';
export const tmux = `[
  {
    command: ['tmux command1', 'command description']
  },
  {
    command: [' tmux command2', 'command description']
  },
  {
    command: ['tmux command3', 'command description']
  }
  ...
]`;
