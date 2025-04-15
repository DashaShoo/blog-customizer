import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Spacing } from '../spacing';

import { fontFamilyOptions, fontColors, backgroundColors, 
	contentWidthArr, fontSizeOptions, defaultArticleState, ArticleStateType} from '../../../src/constants/articleProps';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	setArticleState: (
		value: ArticleStateType | ((prev: ArticleStateType) => ArticleStateType)
	) => void;
}

export const ArticleParamsForm = ({setArticleState}: ArticleParamsFormProps) => {
	const [open, setOpen] = useState(false);
	const [fontFamily, setFontFamily] = useState(defaultArticleState.fontFamilyOption);
	const [fontSize, setFontSize] = useState(defaultArticleState.fontSizeOption);
	const [fontColor, setFontColor] = useState(defaultArticleState.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(defaultArticleState.backgroundColor);
	const [contentWidth, setContentWidth] = useState(defaultArticleState.contentWidth);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleState({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
		console.log("submit");
	};

	const onReset = () => {
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
		setArticleState({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
			fontSizeOption: defaultArticleState.fontSizeOption,
		});
		console.log("reset");
	};

	return (
		<>
			<ArrowButton open={open} setOpen={setOpen} />
			<aside className={clsx(styles.container, open && styles.container_open)}>
				<form className={styles.form} onSubmit={onSubmit} onReset={onReset}>
				<Select
 						title='Шрифт'
 						selected={fontFamily}
 						options={fontFamilyOptions}
						onChange={setFontFamily}
 					/>
 					<Spacing size={50} />
 					<RadioGroup
 						name='fontSize'
 						options={fontSizeOptions}
 						selected={fontSize}
 						title='Размер шрифта'
						onChange={setFontSize}
 					/>
 					<Spacing size={50} />
 					<Select
 						title='Цвет шрифта'
 						selected={fontColor}
 						options={fontColors}
						onChange={setFontColor}
 					/>
 					<Spacing size={50} />
 					<Separator />
 					<Spacing size={50} />
 					<Select
 						title='Цвет фона'
 						selected={backgroundColor}
 						options={backgroundColors}
						onChange={setBackgroundColor}
 					/>
 					<Spacing size={50} />
 					<Select
 						title='Ширина контента'
 						selected={contentWidth}
 						options={contentWidthArr}
						onChange={setContentWidth}
 					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
 						<Button title='Применить' type='submit' />
 					</div>
 				</form>
 			</aside>
		</>
	);
};
