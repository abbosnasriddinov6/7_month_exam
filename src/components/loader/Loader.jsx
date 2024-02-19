import React from 'react'
import { Alert, Flex, Spin } from 'antd';

const Loader = () => {
    return (
        <div>
            <Flex gap="small" vertical>
                <Flex className='ml-20' gap="small">

                    <Spin tip="" size="large" className='w-60'>
                        <div className="content" />
                    </Spin>
                </Flex>

            </Flex>
        </div>
    )
}

export default Loader