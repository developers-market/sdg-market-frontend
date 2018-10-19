<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Trading.
 *
 * @ORM\Table(name="trading", indexes={@ORM\Index(name="fk_trading_sell_offer1_idx", columns={"sell_offer_id"})})
 * @ORM\Entity
 */
class Trading
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="transaction_utc_datetime", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     * @Assert\DateTime()
     */
    private $transactionUtcDatetime;

    /**
     * @var string
     *
     * @ORM\Column(name="number_of_tokens", type="decimal", precision=8, scale=2, nullable=false)
     * @Assert\NotBlank()
     */
    private $numberOfTokens;

    /**
     * @var SellOffer
     *
     * @ORM\ManyToOne(targetEntity="SellOffer")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sell_offer_id", referencedColumnName="id")
     * })
     */
    private $sellOffer;

    public function getId(): ? int
    {
        return $this->id;
    }

    public function getTransactionUtcDatetime(): ? \DateTimeInterface
    {
        return $this->transactionUtcDatetime;
    }

    public function setTransactionUtcDatetime(\DateTimeInterface $transactionUtcDatetime): self
    {
        $this->transactionUtcDatetime = $transactionUtcDatetime;

        return $this;
    }

    public function getNumberOfTokens()
    {
        return $this->numberOfTokens;
    }

    public function setNumberOfTokens($numberOfTokens): self
    {
        $this->numberOfTokens = $numberOfTokens;

        return $this;
    }

    public function getSellOffer(): ? SellOffer
    {
        return $this->sellOffer;
    }

    public function setSellOffer(? SellOffer $sellOffer): self
    {
        $this->sellOffer = $sellOffer;

        return $this;
    }
}