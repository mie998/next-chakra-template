type Props = {
  clickHandler: () => void;
};

const SampleButton: React.FC<Props> = (props) => (
  <button type="button" onClick={props.clickHandler}>
    push me!
  </button>
);

export default SampleButton;
