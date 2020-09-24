import axios from 'axios';

const USER_URI = `/api/v1/users`;

export default class UserService {
  static async getUserDetail(userId = '') {
    const { data } = await axios.get(`${USER_URI}/${userId}`);
    return data;
  }
  static async authenticate() {
    const { data } = await axios.post(`${USER_URI}/auth`);
    console.log(`User authentication done: ${data.isAuth}`);
    return data;
  }

  static async checkEmail({ email }) {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/emails`,
      data: {
        email,
      },
    });
    return { data, email };
  }
  static async login({ email, password }) {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/login`,
      data: {
        email,
        password,
      },
    });
    return data;
  }

  static async register(user) {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/`,
      data: user,
    });
    return data;
  }

  static async patchUser(payload) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/`,
      data: payload,
    });
    return data;
  }

  static async logout() {
    const { data } = await axios({
      method: 'POST',
      url: `${USER_URI}/logout`,
    });
    return data;
  }

  static async deactivate(user) {
    const result = await axios({
      method: 'DELETE',
      url: `${USER_URI}/`,
    });
    return result.status;
  }

  static async toggleEnlistedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/enlisted?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }

  static async toggleLikedEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/liked?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
  static async plusHosting(userId, payload) {
    axios.patch(`${USER_URI}/${userId}`, payload);
  }

  static async toggleHostingEvent({ eventId, userId, type }) {
    const { data } = await axios({
      method: 'PATCH',
      url: `${USER_URI}/${userId}/hosting?type=${type}`,
      data: {
        event_id: eventId,
      },
    });
    return data;
  }
}
