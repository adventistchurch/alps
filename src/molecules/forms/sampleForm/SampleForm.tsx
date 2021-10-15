// import React from 'react'
// import PropTypes from 'prop-types'
//
// export interface SampleFormProps {
//   cancelLabel?: string,
//   submitLabel?: string,
//   children?: React.ReactNode
// }
//
// export const SampleForm = ({
//   cancelLabel = "Cancel", // eslint-disable-line no-unused-vars
//   children,
//   submitLabel = "Submit", // eslint-disable-line no-unused-vars
//   ...props
// }: SampleFormProps): JSX.Element =>{
//   return (
//     <Form padding spacing {...props}>
//       {children}
//     </Form>
//   )
// }
//
// SampleForm.propTypes = {
//   cancelLabel: PropTypes.string,
//   children: PropTypes.node,
//   submitLabel: PropTypes.string,
//   ...Form.propTypes,
// }
// SampleForm.defaultProps = {
//   cancelLabel: 'Cancel',
//   submitLabel: 'Submit',
//   ...Form.defaultProps,
// }
//
// export default SampleForm
