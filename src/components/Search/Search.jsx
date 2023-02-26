import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormStyled, InputStyled, ButtonStyled } from './Search.module';

// import css from './Searchbar.module.css';

export default function Search({ onSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      toast.error('🖼️ Введіть будь ласка назву картинки!');
      return;
    }

    onSubmit(name);
    reset();
  };
  const reset = () => {
    setName('');
  };

  return (
    <FormStyled className="" onSubmit={handleSubmit}>
      <ButtonStyled type="submit" className="">
        Search
      </ButtonStyled>

      <InputStyled
        className=""
        type="text"
        placeholder="Search images and photos"
        value={name}
        onChange={handleNameChange}
      />
    </FormStyled>
  );
}
