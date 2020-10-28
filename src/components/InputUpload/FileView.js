import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
// antd
import Card from 'antd/lib/card'
import Image from 'antd/lib/image';
import Skeleton from 'antd/lib/skeleton'
// helpers
import map from 'lodash/map'
// style
import styles from './styles.module.scss';

const FileView = (props) => {
    const {files,type} = props

    const children = map(files,((item,key) => <Card key={key} className={styles.card} >
        <Image className={styles.imageItem} src={item.url} placeholder={<Skeleton.Image/>} width={120}/>
    </Card>))


    return <Fragment>
        <div className={styles.gridContainer}>{children}</div>
    </Fragment>
}

FileView.propTypes = {
    info: PropTypes.object,
    files: PropTypes.arrayOf(Object),
    type: PropTypes.string
  }

export default FileView