import axios from 'axios';
import VueCookies from 'vue-cookies';
import querystring from 'querystring';
// import Vue from 'vue';
// import i18n from './i18n';

export default ({
    method = '',
    url = '',
    params = {},
    success = () => {},
    fail = () => {},
    final = () => {},
    headers = () => {},
    timeout = 30000,
    errorAlert = true,
    cache = false,
}) => {
    const obj = {
        method,
        url,
        timeout,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...headers,
        },
    };

    if (method === 'post' || method === 'put' || method === 'delete') {
        // check content-type is fixed afterwards
        if (headers['Content-Type'] === 'application/json') {
            obj.data = JSON.stringify(params);
        } else {
            obj.data = querystring.stringify(params);
        }
    } else {
        obj.params = params;
    }

    // 強制更新
    if (!cache) {
        obj.headers['If-Modified-Since'] = '0';
    }

    return axios(obj)
        .then((response) => {
            // 待確認資料格式再修改（統一字串）
            // eslint-disable-next-line
            if (+(response.status) === 200) {
                if (response.headers.token) {
                    VueCookies.set('token', response.headers.token);
                }
                success(response.data);
            }

            return response.data;
        })
        .catch((error) => {
            if (error.response && error.response.data.msg && errorAlert) {
                this.$notify({
                    group: 'bet',
                    text: `${error.response.data.msg} ${error.response.data.code ? `(${error.response.data.code})` : ''}`,
                    type: 'error',
                });
            }
            if (error.response) {
                fail(error.response.data);
            } else {
                fail(error.toString());
            }
        })
        .finally(() => {
            final();
        });
};
