import React from 'react'
import { Modal, View } from 'react-native'
import PropTypes from 'prop-types'

// Components
import { DefaultButton, DefaultText } from '@components'

// SVG
import VerificationFailedSVG from '@images/auth/verification-failed.svg'

// Styles
import { globalStyles, modals, colors, margins, buttons } from '@styles/styles'

const DefaultModal = ({ children, visibility, titleHeader, onPress }) => {
	return (
		<Modal visible={visibility} animationType='fade' transparent={true}>
			<View style={modals.modal}>
				<View style={modals.modalContent}>
					{/* Header */}
					<View style={modals.modalHeader}>
						<DefaultText
							style={{
								color: colors.indigo,
								fontSize: 20,
								fontWeight: 'bold'
							}}
						>
							{titleHeader}
						</DefaultText>
					</View>

					{/* Body */}
					<View style={modals.modalBody}>
						<View style={margins.mb2}>
							<VerificationFailedSVG />
						</View>
						{children}
					</View>

					{/* Footer */}
					<DefaultButton onPress={onPress}>Try Again</DefaultButton>
				</View>
			</View>
		</Modal>
	)
}

DefaultModal.defaultProps = {
	visibility: false
}

DefaultModal.propTypes = {
	visibility: PropTypes.bool,
	titleHeader: PropTypes.string,
	onPress: PropTypes.func.isRequired
}

export default DefaultModal
