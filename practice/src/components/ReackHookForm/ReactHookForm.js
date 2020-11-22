import React, { useState, useEffect, useRef } from 'react';
import Input from '@material-ui/core/Input';

import { useForm } from 'react-hook-form';

/**
 * Renders a <UpdateProfileForm /> component
 * @param  props
 * @param  props.handleCheckHandleAvailability
 **/
export default function ReactHookForm(props) {
  const { register, errors, clearErrors } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const [handle, setHandle] = useState(null);
  const textInput = useRef(null);

  const validateHandle = async (handle) => {
    if (!handle) return;

    const available = await new Promise((resolve) => {
      setTimeout(function () {
        //if the user has stopped typing
        if (handle === textInput.current.children[0].value) {
          //pretend to search database
          const avail = !['dashie', 'skokiegurl'].includes(handle);

          resolve(avail);
        }
      }, 1000);
    });
    return available || 'Opps';
  };

  return (
    <>
      <Input
        error={errors.handle ? true : false}
        style={{ width: '15em' }}
        name="handle"
        onChange={(e) => {
          setHandle(e.target.value);
          if (errors.handle !== undefined) {
            if (errors.handle.type === 'validate') {
              clearErrors(['handle']);
            }
          }
        }}
        ref={textInput}
        inputRef={register({
          validate: async (value) => await validateHandle(value),
          maxLength: { value: 14, message: 'handle must be less than 15 characters' },
        })}
        spellCheck="false"
        id="handle-input"
        aria-describedby="handle-helper-text"
      />
      <p>
        {errors.handle?.message ||
          `www.wishtender.com/${
            handle || props.handle ? (handle || props.handle).toLowerCase() : 'handle'
          }`}
      </p>
    </>
  );
}
