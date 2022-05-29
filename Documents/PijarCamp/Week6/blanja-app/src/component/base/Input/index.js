import React from "react";

// const Input = ({ label, classWrapName, type, id, placeholder, className, name, onChange }) => {
//   return (
//     <div className={classWrapName}>
//       <label htmlFor={id} className="form-label">
//         {label}
//       </label>
//       <input type={type} id={id} className={className} placeholder={placeholder} name={name} onChange={onChange} />
//     </div>
//   );
// };

const Input = ({ label, classWrapName, id, ...props }) => {
  return (
    <div className={classWrapName}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
