let allGamesForNotifications = [];

  getGamesList().then(function (data) {
    allGamesForNotifications = data;
  });

  function getIcon(notification) {
    const { context, __typename } = notification;
    const genericIcons = {
      NotificationFriendshipNew: "/assets/images/icons/notifications/friendship-new.svg",
      NotificationFriendshipNewGrouped: "/assets/images/icons/notifications/friendship-new-grouped.svg",
      NotificationFriendshipRequest: "/assets/images/icons/notifications/friendship-new.svg",
      NotificationFriendshipRequestGrouped: "/assets/images/icons/notifications/friendship-new-grouped.svg",
      NotificationImageReview: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationModReview: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationNewsNew: "/assets/images/icons/notifications/nm-logo.svg",
      NotificationSupporterImageReview: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationVideoReview: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModImageRemove: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModImageRemoveGrouped: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModVideoRemove: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModVideoRemoveGrouped: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModFileRemove: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModFileRemoveGrouped: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModFileArchive: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModFileArchiveGrouped: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModHide: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModArticleRemove: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationAdminModReadmeRemove: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationDonationPointsReport: "/assets/images/icons/notifications/donation-points.svg",
      NotificationDonationPointsPaid: "/assets/images/icons/notifications/donation-points.svg",
      NotificationCollectionWasListed: "/assets/images/icons/notifications/moderation-icon.svg",
      NotificationModerationFixReject: "/assets/images/icons/notifications/moderation-icon.svg",
    };

    let iconPath;
    let iconClass;
    if (Object.keys(genericIcons).includes(__typename)) {
      iconPath = genericIcons[__typename];
      iconClass = 'notification-category-generic-icon';
    } else {
      iconPath = Array.isArray(context) ? context[0].image : context.image;
      iconClass = 'notification-category-specific-icon';
    }

    if (!iconPath) {
      iconPath = "/assets/images/icons/notifications/nm-logo.svg";
      iconClass = 'notification-category-generic-icon';
    }

    return `<img class='${iconClass}' src='${iconPath}' />`;
  }

  function getGameFromId(gameId) {
    return allGamesForNotifications.find(({ id }) => id === +gameId)?.name;
  }

  function getNotificationTileFromContext(notification) {
    const { hasBeenRead, id, lastUpdated, link, __typename, gameId } = notification;

    return `
      <li class='notification-wrapper ${hasBeenRead ? 'notification-read' : 'notification-unread'}' data-notification-id='${id}'>
        <div>
          <div class='notification' data-notification-id='${id}'>
            <a href='${link}' class='notification-link' data-notification-id='${id}'>
              <div class='notification-category-icon-wrapper'>${getIcon(notification)}</div>
              <div class='notification-content'>
                ${_.template($(`#${__typename.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-template`).html())(notification)}
                <div class='notification-date'>
                  <span>${timeAgo(lastUpdated)} ago</span>
                  ${gameId && getGameFromId(gameId) ? `<span>&bull; ${getGameFromId(gameId)}</span>` : ''}
                </div>
              </div>
            </a>
            <div class='notification-menu-wrapper'>
              <button id='notification-${id}-menu-button' aria-controls='notification-${id}-menu' class='notification-menu-button custom-button expanding-hover' title='Options'>
                <img src='/assets/images/icons/notifications/menu-icon.svg' />
              </button>
            </div>
            <div class='notification-indicator-wrapper'>
              <div class='notification-indicator-box expanding-hover' title='Mark as read'>
                <button class='notification-indicator custom-button' />
              </div>
            </div>
          </div>
        </div>
        <div id='notification-${id}-menu' class='notification-menu' data-notification-id='${id}'>
          <div id='notification-${id}-mark-as-read' class='notification-menu-row notification-mark-as-read' data-notification-id='${id}'>
            <div class='notification-menu-icon-wrapper'>
              <img class='notification-menu-icon' src='/assets/images/icons/notifications/tick.svg' />
            </div>
            <button class='notification-menu-text custom-button'> Mark as read </button>
          </div>
          <div id='notification-${id}-mark-as-unread' class='notification-menu-row notification-mark-as-unread' data-notification-id='${id}'>
            <div class='notification-menu-icon-wrapper'>
              <img class='notification-menu-icon' src='/assets/images/icons/notifications/tick.svg' />
            </div>
            <button class='notification-menu-text custom-button'> Mark as unread </button>
          </div>
          <div id='notification-${id}-remove' class='notification-menu-row notification-remove'>
            <div class='notification-menu-icon-wrapper'>
              <img class='notification-menu-icon' src='/assets/images/icons/notifications/remove-circle.svg' />
            </div>
            <button class='notification-menu-text custom-button'> Remove this notification </button>
          </div>
        </div>
      </li>
    `;
  }

  function addNotificationTileToDom($parent, tile) {
    $parent.append(tile);
  }