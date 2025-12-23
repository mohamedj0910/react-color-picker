import React from "react";

export interface ColorPickerActionsProps {
  onCancel: () => void;
  onApply: () => void;
}

export const ColorPickerActions: React.FC<ColorPickerActionsProps> = ({
  onCancel,
  onApply,
}) => {
  return (
    <div className="actions">
      <button onClick={onCancel}>Cancel</button>
      <button className="apply" onClick={onApply}>
        Apply
      </button>
    </div>
  );
};
