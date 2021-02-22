interface ButtonProps {
  className: string
  children: string
}

function Button(props: ButtonProps) {
  return(
    <button type="button" className={props.className}>
     {props.children}

    </button>
  );
}

export default Button
