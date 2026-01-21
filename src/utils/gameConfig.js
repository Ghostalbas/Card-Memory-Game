import {
    Ghost, Heart, Star, Moon, Sun, Cloud, Snowflake, Flame,
    Droplets, Zap, Anchor, Music, Camera, Video, Bell, Lock,
    Key, Unlock, User, Users, Smile, Frown, Meh, ThumbsUp,
    ThumbsDown, Eye, EyeOff, Search, Menu, Home, Settings, Wrench
} from 'lucide-react';

export const DIFFICULTY_LEVELS = {
    EASY: {
        name: 'Easy',
        gridSize: 4,
        timeLimit: 60,
        pairs: 8
    },
    MEDIUM: {
        name: 'Medium',
        gridSize: 6,
        timeLimit: 90,
        pairs: 18
    },
    HARD: {
        name: 'Hard',
        gridSize: 8,
        timeLimit: 120,
        pairs: 32
    }
};

// Array of all available icons
export const CARD_ICONS = [
    Ghost, Heart, Star, Moon, Sun, Cloud, Snowflake, Flame,
    Droplets, Zap, Anchor, Music, Camera, Video, Bell, Lock,
    Key, Unlock, User, Users, Smile, Frown, Meh, ThumbsUp,
    ThumbsDown, Eye, EyeOff, Search, Menu, Home, Settings, Wrench
];
