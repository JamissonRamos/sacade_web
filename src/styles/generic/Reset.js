import { createGlobalStyle } from "styled-components";


const Reset =  createGlobalStyle `

	/* http://meyerweb.com/eric/tools/css/reset/ 
	v2.0 | 20110126
	License: none (public domain)
	*/

	/* 
		-Todos os meus seletores vão ser manipulados nesse arquivos;
		-Manipulações que não serão alteradas de acordo o projeto;
		-
	*/

	*{
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		box-sizing: border-box;
		overflow: hidden;

		/* Formato Jamisosn */
		font-family: "Roboto", sans-serif;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-weight: 400;
        font-style: normal;
	}

	/* HTML5 display-role reset for older browsers */

	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section 
	{
		display: block;
	}
	body 
	{
		line-height: 1;
	}
	ol, ul, a
	{
		list-style: none;
		text-decoration: none;
	}
	blockquote, q 
	{
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after 
	{
		content: '';
		content: none;
	}
	table 
	{
		border-collapse: collapse;
		border-spacing: 0;
	}

`

export default Reset;
