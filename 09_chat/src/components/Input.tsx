import React, { FC, memo, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { useTheme } from '@emotion/react';
import styled from '@emotion/native';

const Container = styled.View({
  flexDirection: 'column',
  width: '100%',
  marginVertical: 10,
});

interface ILabel {
  isFocus: boolean;
}

const Label = styled.Text<ILabel>(({ theme, isFocus }) => ({
  fontSize: 14,
  fontWeight: '600',
  marginBottom: 6,
  color: isFocus ? theme.text : theme.gray2,
}));

interface IStyledInput {
  isFocus: boolean;
}

const StyledInput = styled.TextInput<IStyledInput>(({ theme, isFocus }) => ({
  backgroundColor: theme.white,
  color: theme.text,
  paddingVertical: 20,
  paddingHorizontal: 10,
  fontSize: 16,
  borderWidth: 1,
  borderColor: isFocus ? theme.text : theme.gray2,
  borderRadius: 4,
}));

interface IInput {
  label: string;
  placeholder: string;
  value: string;
  returnKeyType: ReturnKeyTypeOptions;
  maxLength?: number;
  onChangeText: (text: string) => void;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const Input: FC<IInput> = ({
  label,
  placeholder,
  maxLength,
  returnKeyType,
  value,
  onChangeText,
  onSubmitEditing,
}) => {
  const theme = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  return (
    <Container>
      <Label isFocus={isFocus}>{label}</Label>

      <StyledInput
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="none"
        isFocus={isFocus}
        placeholder={placeholder}
        placeholderTextColor={theme.gray2}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        value={value}
        onFocus={onFocus}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
      />
    </Container>
  );
};

export default memo(Input);
