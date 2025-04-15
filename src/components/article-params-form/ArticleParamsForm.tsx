import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);


	return (
		<>
			<ArrowButton open={open} setOpen={setOpen} />
			<aside className={clsx(styles.container, open && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
					<Button title='Сбросить' type='reset' />
 						<Button title='Применить' type='submit' />
 					</div>
 				</form>
 			</aside>
		</>
	);
};
