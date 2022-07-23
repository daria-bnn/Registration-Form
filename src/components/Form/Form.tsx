import React, { FC, FormEvent, useState } from 'react'

const isSelectElement = (
  element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
): element is HTMLSelectElement => element.tagName === 'SELECT'

const isTextAreaElement = (
  element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
): element is HTMLTextAreaElement => element.tagName === 'TEXTAREA'

const Form: FC = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    'cats-breed': '',
    agree: false,
    review: '',
    color: '',
  })

  const {
    username,
    password,
    'cats-breed': catsBreed,
    agree,
    review,
    color,
  } = form

  const handleFieldChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { target } = event

    if (isSelectElement(target)) {
      setForm((prev) => ({ ...prev, [target.name]: target.value }))

      return
    }

    if (isTextAreaElement(target)) {
      setForm((prev) => ({ ...prev, [target.name]: target.value }))

      return
    }

    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Имя пользователя
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="password">
        Пароль
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="cats-breed">
        <select
          id="cats-breed"
          name="cats-breed"
          value={catsBreed}
          onChange={handleFieldChange}
        >
          <option value="">---Выберите породу---</option>
          <option value="pers">Персидские</option>
          <option value="siam">Сиамские</option>
        </select>
      </label>
      <label htmlFor="agree">
        Согласие на мытье кота
        <input
          id="agree"
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleFieldChange}
        />
      </label>
      <label htmlFor="review">
        Отзыв
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleFieldChange}
        />
      </label>
      <div>
        Выберите цвет кота
        <label htmlFor="black">
          Черный
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            checked={color === 'black'}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="white">
          Белый
          <input
            type="radio"
            id="white"
            name="color"
            value="white"
            checked={color === 'white'}
            onChange={handleFieldChange}
          />
        </label>
      </div>
      <button type="submit">Вывести в консоль данные</button>
    </form>
  )
}

export default Form
