const User = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const { openid, nickname, avatarUrl } = req.body;
    let user = await User.findOne({ where: { openid } });
    
    if (!user) {
      user = await User.create({
        openid,
        nickname,
        avatarUrl
      });
    } else {
      user.nickname = nickname || user.nickname;
      user.avatarUrl = avatarUrl || user.avatarUrl;
      await user.save();
    }
    
    res.status(200).json({
      message: 'Login successful',
      user
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed', detail: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { phoneNumber, nickname, avatarUrl } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.nickname = nickname || user.nickname;
    user.avatarUrl = avatarUrl || user.avatarUrl;
    await user.save();
    res.status(200).json({ message: 'Profile updated', user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update profile' });
  }
};
