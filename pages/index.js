import React, { 
	Fragment,
	useState,
	useEffect,
} from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const styles = {}

const Index = (props) => {
	const { t } = useTranslation()

	useEffect(() => {  })

	return <Fragment>
		test
	</Fragment>
}

Index.propTypes = {

}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Index

