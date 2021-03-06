/* styled-components style variables */
export const disabled = `
   &:disabled, &:disabled:hover {
    filter: opacity(0.8) saturate(10%);
    cursor: not-allowed;
  }
`;

export const hover = `
  &:hover {
    filter: brightness(1.2) saturate(1.2);
    cursor: pointer;
  }
`;
