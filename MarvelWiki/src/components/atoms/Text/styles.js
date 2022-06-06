import styled from 'styled-components/native';

export const CustomText = styled.Text`
    font-size: 22px;
    color: ${({ color }) => color || 'white' };
    font-weight: bold;
    margin-top: 12px;
`;