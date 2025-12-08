import { useState } from "react";
import "./dropdown.css"

export default function Drowpdown({options, currentOption, onChange}) {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSelect = (option, index) => {
    onChange(option);
    setSelectedIndex(index);
  };

  // const currentOptionStyle = {
  //   color,
  //   fontSize
  // }

  // const OptionStyle = {
  //   color: optionColor,
  //   fontSize: optionFontSize
  // }

  return (
      <div
        className="dropdown"
        tabIndex={0}
        onBlur={()=>setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
          <div className={open? "current-option active": "current-option"}>
              <span>{currentOption}</span>
              <div className={open? "arrow active":"arrow"}></div>
          </div>
          <div className={open? "options active": "options"}>
              {options.map((option, index)=>(
                  <div
                    onClick={() => handleSelect(option, index)}

                    className={selectedIndex == index? "option selected": "option"} key={option.codigo}
                  >
                    <span>{option.descricao}</span>
                  </div>
              ))}
          </div>
      </div>
  );
}
