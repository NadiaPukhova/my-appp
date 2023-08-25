import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import s from './Header.module.scss'
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector'
import { useTheme } from 'hook/useTheme'
import { Theme } from 'context/ThemeContext'

interface Props {}

export const Header = (props: Props) => {
	const theme = useTheme()

	const options = [
		{ value: 'city-1', label: 'Нижний Новгород' },
		{ value: 'city-2', label: 'Санкт-Петербург' },
		{ value: 'city-3', label: 'Москва' }
	]

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor:
				theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.20)',
			minWidth: '194px',
			height: '37px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: theme.theme === Theme.DARK ? '#fff' : '#000'
		})
	}

	function changeTheme() {
		theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
	}

	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id='header-logo' />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change__theme} onClick={changeTheme}>
					<GlobalSvgSelector id='change-theme' />
				</div>
				<Select
					defaultValue={options[0]}
					styles={colourStyles}
					options={options}
				/>
			</div>
		</header>
	)
}
