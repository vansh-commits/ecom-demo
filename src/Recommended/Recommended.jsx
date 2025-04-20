import React from 'react'
import Button from "../components/Button"

const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className="ml-[20rem] mb-5 mt-5 text-[20px]">Recommended</h2>
        <div className="flex ml-[20rem]">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  )
}

export default Recommended
