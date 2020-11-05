import styled from 'styled-components';

const Input = styled.input`
	padding: 8px 4px;
	width: ${(p) => (p.large ? '100%' : '50%')};
`;

export { Input };
